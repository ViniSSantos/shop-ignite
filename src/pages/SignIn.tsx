import React, { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/SignIn.module.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
//import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const router = useRouter();
  const device_name = "novo_agente_facta";

  const [login, setlogin] = useState<string>(''); // | nulo >( nulo ) login
  const [senha, setsenha] = useState<string>('');

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [senhaError, setsenhaError] = useState<string>('');

  const SignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!login || !senha) {
      setErrorMsg('Por favor, preencha os dados');

      setTimeout(() => { 
        setErrorMsg(''); // Limpa a mensagem de erro após um determinado tempo
      }, 3000); // Define o tempo em milissegundos (por exemplo, 3000 ms = 3 segundos)

      return;
    }

    try {
      // Chama a API para validar o usuário e senha
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
  
        
        },
        body: JSON.stringify({ login, senha, device_name}),
      });
      //console.log(process.env.NEXT_PUBLIC_API_URL); //log variável de ambiente

      const data = await response.json(); // Converte a resposta em um objeto JavaScript
      
      //console.log('data = retorno login :');
      console.log(data); // Acessa os dados da resposta

      const perfilUsuario = data.data;
      
      console.log('perfilUsuario: ');
      console.log(perfilUsuario); 
            
      
      const v_acessoWeb = data.data.v_acessoWeb;
      console.log('v_acessoWeb: '); 
      console.log(v_acessoWeb);
      
      
      //const userLogin = localStorage.setItem()
      
      


      if (response.ok) {
        // Usuário válido, execute a lógica de autenticação ou redirecionamento
        // por exemplo, definindo um token de autenticação no local storage

        localStorage.setItem('token', perfilUsuario.token);
        localStorage.setItem('perfilAcesso', JSON.stringify(v_acessoWeb)); // Se caso puder, deste modo enviamos um object com todo o parametro necessario para formar o perfil de acesso.
        localStorage.setItem('codigo' , v_acessoWeb.codigo);
        localStorage.setItem('nome' , v_acessoWeb.nome);
        localStorage.setItem('corretor', v_acessoWeb.corretor);
        localStorage.setItem('login', v_acessoWeb.login);
        localStorage.setItem('estado', v_acessoWeb.estado);
        localStorage.setItem('tipo', v_acessoWeb.tipo);
        localStorage.setItem('classificacao', v_acessoWeb.classificacao);
        localStorage.setItem('setor', v_acessoWeb.setor);
        localStorage.setItem('nivel', v_acessoWeb.nivel);
        localStorage.setItem('email', v_acessoWeb.email);
        localStorage.setItem('alteracaoSenha', v_acessoWeb.alteracaoSenha);
        localStorage.setItem('email_reset', v_acessoWeb.email_reset);

        
        console.log('log no perfilUsuario :');
        console.log(JSON.stringify(perfilUsuario));


        //localStorage.clear();
        

        // Redirecionar para dentro do portal
        router.push('/home'); // Redireciona para a página home
  

        console.log('Successo ao logar');
      } else {
        setErrorMsg('Usuario e/ou senha Inválido');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('Um erro ocorreu, Por favor tente outra vez.');
    }
    setTimeout(() => { 
      setErrorMsg(''); 
    }, 3000); 

  };

  const loginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setlogin(event.target.value);
  };

  const senhaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setsenha(event.target.value);
    setsenhaError(''); // Limpa a mensagem de erro ao digitar uma nova senha
  };

  const handleSignUp = () => {
    window.location.href = 'https://agentefacta.com.br/';
  };



  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.formContainer} ${styles.signInContainer}`}> {/*Esse é o container Sign in*/}
        
          <form className={styles.form} onSubmit={SignIn}>
            <img className={styles.logoSlogan} src='/imgs/logoSloganFacta.png'/>
            
            <fieldset className={styles.inputField}>
                <legend className={styles.fieldLegend}>Usuário</legend>
                <input
                type="text"
                className={styles.formInput}
                placeholder="usuario@exemplo.com.br"
                onChange={(e) => setlogin(e.target.value)}
                />
          </fieldset>
          
            <input className={styles.input} type="password" placeholder="Password" 
              value={senha}
              onChange={senhaChange}
            
            />
            {senhaError  && <p className={styles.error}>{senhaError}</p>}
            {errorMsg && <p className={styles.error}>{errorMsg}</p>}

            <a className={styles.ancora} href="#">Esqueceu sua senha?</a>
            <button className={styles.button}>Entrar</button>
          </form>
        </div>
        
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1>Olá, Amigo!</h1>
              <p>Insira seus dados pessoais e comece sua jornada conosco</p>
              <button className={styles.buttonGhost} id="signUp" 
                onClick={handleSignUp} >
                
                Saiba Mais
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
