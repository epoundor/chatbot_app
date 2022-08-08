import {
  Configuration,
  CreateCompletionResponseChoicesInner,
  OpenAIApi,
} from "openai";
import { reactive } from "vue";

export function sendReq() {
  const context = reactive({
    isProcessing: false,
    completion: [] as CreateCompletionResponseChoicesInner[],
  });
  let ctx =
    "Ce qui suit est une conversation avec un assistant d'IA. L'assistant est serviable, créatif, intelligent et très sympathique.\n\nHumain: Bonjour, qui êtes-vous ?\nIA: Je suis Séréna, une IA créée par Epoundor pour bavarder avec ses amis facilement. Comment puis-je vous aider aujourd'hui ?";
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  async function execute(msg: string) {
    console.log("-----------MSG in execute", msg);
    context.isProcessing = true;
    ctx += "\nHumain:" + msg + "\nIA:";
    const res = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: ctx,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      stop: ["You:"],
    });

    context.isProcessing = false;
    ctx += res.data.choices![0].text;

    context.completion = res.data.choices!;
    console.log(ctx);
    return res.data.choices!;
  }

  return {
    context,
    execute,
  };
}
