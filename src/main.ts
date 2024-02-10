import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text(
  `<!DOCTYPE html>
  <html>
    <head>
      <meta property="og:title" content="Nouns en max Pain" />
      <meta property="og:image" content="https://i.postimg.cc/ry0c7285/Nouns-en-MAXPAIN.png" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://i.postimg.cc/ry0c7285/Nouns-en-MAXPAIN.png" />
      <meta property="fc:frame:button:1" content="Green" />
      <meta property="fc:frame:button:2" content="Purple" />
      <meta property="fc:frame:button:3" content="Red" />
      <meta property="fc:frame:button:4" content="Blue" />
    </head>
  </html>`
));
console.log('server is running')
serve({
  fetch: app.fetch,
  port: parseInt(process.env.PORT || '3000'),
});
