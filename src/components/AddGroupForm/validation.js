import { string, object, setLocale } from "yup";

const validation = (() => {
  setLocale({
    mixed: {
      required: "O campo é obrigatório"
    },
    string: {
      url: "Link inválido"
    }
  });

  return object().shape({
    name: string().required(),

    link: string()
      .test("url", "Link inválido", value => {
        const boolValue = !!value;
        if (boolValue) {
          const regex = /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
          return regex.test(value);
        }
        return true;
      })
      .required(),

    description: string().required()
  });
})();

export default validation;
