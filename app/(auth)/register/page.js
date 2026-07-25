import RegisterForm from "./RegisterForm";

export const metadata = {
    title: 'Register | QuickPlace',
    description:'Register yourself to get the best deals and offers on QuickPlace.'}

export default async function Register(){
     return (  
      <RegisterForm />
  );
}