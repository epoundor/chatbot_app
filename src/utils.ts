import {
  Configuration,
  CreateCompletionResponseChoicesInner,
  OpenAIApi,
} from "openai";
import { computed, reactive, ref } from "vue";

export function sendReq() {
  const context = reactive({
    isProcessing: false,
    completion: [] as CreateCompletionResponseChoicesInner[],
  });
  let ctx =
    "Ce qui suit est une conversation avec Séréna l'amie de Epoundor. Séréna est drôle, créative, intelligente et très sympathique.\n\nYou: Bonjour, qui êtes-vous ?\nSéréna: Je suis Séréna, une amie de Epoundor, il est oqp tu veux quoi chef?";
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  async function execute(msg: string) {
    console.log("-----------MSG in execute", msg);
    context.isProcessing = true;
    ctx += "\nYou:" + msg + "\nSéréna:";
    const res = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: ctx,
      temperature: 0.5,
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

export const parseTime = computed(() => {
  const hour = ref(new Date().getHours());
  const minute = ref(new Date().getMinutes());
  setInterval(async () => {
    hour.value = new Date().getHours();
    minute.value = new Date().getMinutes();
  }, 500);
  return (
    hour.value.toString().padStart(2, 0) +
    ":" +
    minute.value.toString().padStart(2, 0)
  );
});

export class EventBus {
  events: Array<Event>;
  constructor() {
    this.events = [];
  }
  register(e: string) {
    this.events.push(new CustomEvent(e));
  }
  emit(e: string, data: any) {
    const event = this.events.find((el) => el.type == e);
    dispatchEvent(new CustomEvent(e, { detail: data }));
  }
  on(e: string, clb: EventListenerOrEventListenerObject) {
    addEventListener(e, clb);
  }
}
