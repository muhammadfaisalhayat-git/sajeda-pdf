const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../out/sitemap.xml');

if (fs.existsSync(sitemapPath)) {
  let content = fs.readFileSync(sitemapPath, 'utf8');
  
  // Verify it hasn't been injected already
  if (!content.includes('sitemap.xsl')) {
    const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
    const stylesheetInsertion = '\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';
    
    if (content.startsWith(xmlDeclaration)) {
      content = xmlDeclaration + stylesheetInsertion + content.slice(xmlDeclaration.length);
      fs.writeFileSync(sitemapPath, content, 'utf8');
      console.log('✓ Successfully injected sitemap.xsl stylesheet link into out/sitemap.xml');
    } else {
      console.warn('⚠️ Could not find standard XML declaration at start of sitemap.xml');
    }
  } else {
    console.log('✓ sitemap.xsl stylesheet link already exists in sitemap.xml');
  }
} else {
  console.warn('⚠️ out/sitemap.xml not found, skipping stylesheet injection');
}
