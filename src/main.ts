<!DOCTYPE html>
<html>
<head>
  <title>Chat with GPT-3</title>
  <script>
    async function chatWithGpt3() {
      const prompt = document.getElementById('prompt').value;
      const responseArea = document.getElementById('response');

      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPEN_AI_KEY'
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 60,
        }),
      });

      const data = await response.json();
      responseArea.textContent = data.choices[0].text;
    }
  </script>
</head>
<body>
  <h1>Chat with GPT-3</h1>
  <textarea id="prompt"></textarea>
  <button onclick="chatWithGpt3()">Send</button>
  <p id="response"></p>
</body>
</html>