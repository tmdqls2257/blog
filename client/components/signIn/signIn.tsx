import React from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import { useRecoilState } from 'recoil';
import { signModalState } from '../../store/store';
import Button from '../button/button';
import styles from './signIn.module.css';

const SignIn = () => {
  const [signInState, setSignInState] = useRecoilState(signModalState);

  const onClickBtn = () => {
    signInState ? setSignInState(false) : setSignInState(true);
  };
  const onClickCancelBtn = () => {
    signInState ? setSignInState(false) : setSignInState(true);
  };
  return (
    <div className={styles.container}>
      <Button onClick={onClickCancelBtn}>X</Button>
      <h1>ID</h1>

      <input type="text" placeholder="ID" />
      <h1>PassWord</h1>
      <input type="text" placeholder="PassWord" />
      <Button onClick={onClickBtn}>SignIn</Button>
    </div>
  );
};

export default SignIn;
