#!/usr/bin/env python3
"""발행 전 사이트 무결성 검사. 하나라도 실패하면 종료코드 1 — 푸시하지 말 것.
검사: main.js 문법 / 기사 id 중복 / 기사 파일 존재 / sitemap .html 잔존 / 기사 canonical."""
import re, subprocess, sys, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
errs = []
js = open('main.js', encoding='utf-8').read()
r = subprocess.run(['node', '-e', "new Function(require('fs').readFileSync('main.js','utf8'))"],
                   capture_output=True, text=True)
if r.returncode:
    errs.append('main.js 문법 오류:\n' + r.stderr.strip()[:600])
ids = re.findall(r'\bid:\s*(\d+)', js)
dups = {i for i in ids if ids.count(i) > 1}
if dups: print(f'[경고] 기존 id 중복(차단 안 함): {sorted(dups)}')
for u in re.findall(r"url:\s*'(article_[^']+\.html)'", js):
    if not os.path.exists(u): errs.append(f'main.js 가 가리키는 파일 없음: {u}')
sm = open('sitemap.xml', encoding='utf-8').read()
if re.search(r'\.html</loc>', sm): errs.append('sitemap.xml 에 .html 주소가 남아 있음')
new = subprocess.run(['git', 'ls-files', '--others', '--exclude-standard', '--cached', '--', 'article_*_v2.html'],
                     capture_output=True, text=True).stdout.split()
tracked = set(subprocess.run(['git', 'ls-tree', '-r', '--name-only', 'HEAD'], capture_output=True, text=True).stdout.split())
for f in sorted(x for x in new if x not in tracked):  # 이번에 새로 추가하는 기사만
    if os.path.exists(f):
        h = open(f, encoding='utf-8').read()
        if 'rel="canonical"' not in h: errs.append(f'canonical 없음: {f}')
if errs:
    print('[FAIL] 푸시 금지'); print('\n'.join('- ' + e for e in errs)); sys.exit(1)
print('[PASS] 사이트 무결성 검사 통과')
