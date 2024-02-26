import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta property="og:title" content="Nouns en max Pain" />
        <meta property="og:image" content="https://i.postimg.cc/ry0c7285/Nouns-en-MAXPAIN.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.postimg.cc/ry0c7285/Nouns-en-MAXPAIN.png" />
        <meta property="fc:frame:button:1" content="⌐🆇-🆇" />

        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1target" content="https://frame-workshop-production-d62f.up.railway.app/button1" />
      </head>
    </html>
  );
});

app.post("/button1", (c) => {
  return c.html(
    <html>
      <head>
        <meta property="og:title" content="Nouns en The Spiral" />
        <meta property="og:image" content="https://i.postimg.cc/2SdKg2bQ/Nouns-en-Pho.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.postimg.cc/2SdKg2bQ/Nouns-en-Pho.png" />
      </head>
    </html>
  );
});

console.log('server is running');
serve({
  fetch: app.fetch,
  port: parseInt(process.env.PORT || '3000'),
});
