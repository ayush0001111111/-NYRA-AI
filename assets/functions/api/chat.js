export async function onRequestPost({ request, env }) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!env.AI) {
      return Response.json(
        { error: "AI binding is not configured" },
        { status: 503 }
      );
    }

    const result = await env.AI.run(
      "@cf/meta/llama-3.1-8b-instruct",
      {
        messages: [
          {
            role: "system",
            content: "You are NYRA, a friendly female AI assistant. Address the user as Boss. Reply naturally in Hindi or English according to the user's language. Be helpful, concise, safe and age-appropriate."
          },
          {
            role: "user",
            content: message.slice(0, 4000)
          }
        ]
      }
    );

    return Response.json({
      reply: result.response || "Boss, please try again."
    });

  } catch (error) {
    return Response.json(
      { error: "AI service temporarily unavailable." },
      { status: 500 }
    );
  }
      }
