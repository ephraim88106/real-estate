#!/usr/bin/env python3
"""
부동산인사이트 sitemap.xml 자동갱신 스크립트
- ephraim88106/real-estate 레포 루트에서 실행
- 모든 _v2.html 기사 파일을 스캔해 sitemap.xml 재생성
"""
import os, re
from datetime import datetime
from urllib.parse import quote

DOMAIN = "https://realestate.ephseed.com"
TODAY = datetime.now().strftime("%Y-%m-%d")
REPO = os.path.dirname(os.path.abspath(__file__))

def get_date(filename):
    m = re.match(r"article_(\d{4})(\d{2})(\d{2})_", filename)
    if m:
        return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    return TODAY

def make_url(filename):
    base = filename[:-5]  # strip .html
    return f"{DOMAIN}/{quote(base, safe='-_.')}"

files = sorted([f for f in os.listdir(REPO) if f.endswith("_v2.html") and f.startswith("article_")])

urls = [{"loc": f"{DOMAIN}/", "lastmod": TODAY, "changefreq": "daily", "priority": "1.0"}]
seen = set()
for f in files:
    url = make_url(f)
    if url in seen:
        continue
    seen.add(url)
    urls.append({"loc": url, "lastmod": get_date(f), "changefreq": "weekly", "priority": "0.8"})

for page, pri in [("privacy", "0.5"), ("terms", "0.5")]:
    urls.append({"loc": f"{DOMAIN}/{page}", "lastmod": TODAY, "changefreq": "monthly", "priority": pri})

lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
         '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">']
for u in urls:
    lines += [f"  <url>",
              f"    <loc>{u['loc']}</loc>",
              f"    <lastmod>{u['lastmod']}</lastmod>",
              f"    <changefreq>{u['changefreq']}</changefreq>",
              f"    <priority>{u['priority']}</priority>",
              f"  </url>"]
lines.append("</urlset>")

out = os.path.join(REPO, "sitemap.xml")
with open(out, "w", encoding="utf-8") as fh:
    fh.write("\n".join(lines))

print(f"sitemap.xml 갱신 완료: {len(urls)}개 URL (기사 {len(files)}편)")
