import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.html(
  `<!DOCTYPE html>
  <html>
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://i.postimg.cc/ry0c7285/Nouns-en-MAXPAIN.png" />
    </head>
  </html>`
));
console.log ('server is running')

serve(app);
