import { z } from 'zod';


const FormSchema = z.object({
    id: z.string(),
    nom: z.string({
     invalid_type_error: 'Veuillez entrer votre Nom',
    }),
    prenom: z.string({
      invalid_type_error: 'Veuillez entrer votre Prénom',
    }),
    mail: z.string({
      invalid_type_error: 'Veuillez entrer votre Adresse Mail',
    }), 
    numero: z.string({
      invalid_type_error: 'Veuillez entrer votre Numéro de Téléphone',
    }),
    mes: z.string({
      invalid_type_error: 'Veuillez entrer votre Message',
    }),
  });

  export type State = {
    errors?: {
      nom?: string[];
      prenom?: string[];
      mail?: string[];
      numero?: string[];
      mes?: string[];
    };
    message?: string | null,
  }

  const CreateForm = FormSchema.omit({ id: true });


  export async function createForm(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreateForm.safeParse({
      nom: formData.get('nom'),
      prenom: formData.get('prenom'),
      mail: formData.get('mail'),
      numero: formData.get('numero'),
      mes: formData.get('mes'),
    });

    console.log(validatedFields.data.mail.length)
  
  
   
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }
   

  }


//   export async function createForm(prevSate : State, formData: FormData) {

//     // Validate form using Zod
//     const validatedFields = CreateForm.safeParse({
//         nom: formData.get('nom'),
//         prenom: formData.get('prenom'),
//         mail: formData.get('mail'),
//         numero: formData.get('numero'),
//         mes: formData.get('mes'),
//       });
      

//     if (!validatedFields.success) {
//         return {
//           errors: validatedFields.error.flatten().fieldErrors,
//           message: 'Champs manquants, création du formulaire impossible',
//         };
//       }

//       const { nom, prenom, mail } = validatedFields.data;
//       console.log(nom, prenom, mail)

//  }