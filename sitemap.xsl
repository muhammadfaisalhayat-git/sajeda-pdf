<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sajeda PDF - XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #1f2937;
            background-color: #f9fafb;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e5e7eb;
            padding: 32px;
          }
          h1 {
            font-size: 28px;
            font-weight: 700;
            color: #111827;
            margin-top: 0;
            margin-bottom: 8px;
          }
          p.subtitle {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 24px;
            line-height: 1.5;
          }
          .stats {
            display: inline-block;
            background-color: #e0f2fe;
            color: #0369a1;
            padding: 6px 12px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 24px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            background-color: #f3f4f6;
            color: #374151;
            font-weight: 600;
            font-size: 13px;
            padding: 12px 16px;
            border-bottom: 2px solid #e5e7eb;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td {
            padding: 14px 16px;
            border-bottom: 1px solid #f3f4f6;
            font-size: 14px;
            word-break: break-all;
          }
          tr:hover td {
            background-color: #f9fafb;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority-high {
            color: #16a34a;
            font-weight: 600;
          }
          .priority-med {
            color: #d97706;
          }
          .priority-low {
            color: #9ca3af;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Sajeda PDF Sitemap</h1>
          <p class="subtitle">
            This is an XML Sitemap generated for search engines (Google, Bing, Yandex) to index <strong>sajedapdf.com</strong>.
          </p>
          <div class="stats">
            Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
          </div>
          <table>
            <thead>
              <tr>
                <th width="65%">URL</th>
                <th width="10%">Priority</th>
                <th width="10%">Change Freq</th>
                <th width="15%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td>
                    <xsl:variable name="p" select="sitemap:priority"/>
                    <span class="priority-med">
                      <xsl:if test="$p &gt;= 0.9">
                        <xsl:attribute name="class">priority-high</xsl:attribute>
                      </xsl:if>
                      <xsl:if test="$p &lt; 0.5">
                        <xsl:attribute name="class">priority-low</xsl:attribute>
                      </xsl:if>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td style="color: #6b7280;">
                    <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
