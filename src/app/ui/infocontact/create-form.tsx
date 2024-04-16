import { Data } from '@/app/lib/definitions';
import { createForm } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function CreateForm() {

    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createForm, initialState);
    // console.log(state)

    // if (state) {
    //     console.log('non')
    // } else {
    //     console.log("oui")
    // }

    return (
        <form  action={dispatch} className='flex text-black flex-col w-5/6 h-[300px] justify-between'>
        <input type="text" name="nom" placeholder='Nom'/>
        {state?.errors?.nom &&
          state.errors.nom.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        <input type="text" name="prenom" placeholder='Prénom'/>
        {state?.errors?.prenom &&
          state.errors.prenom.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        <input type="text" name="mail" placeholder='Adresse Mail'/>  
        {state?.errors?.mail &&
          state.errors.mail.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}     
        <input type="text" name="numero" placeholder='Numéro de Téléphone'/>
        {state?.errors?.numero &&
          state.errors.numero.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        <textarea name="mes" placeholder='Votre message'/>
        {state?.errors?.mes &&
          state.errors.mes.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        <button className='text-white' type="submit">Submit</button>
       
      </form>   
       )
  
  }