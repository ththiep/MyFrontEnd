// src/features/auth/authView.js
import { useNavigate } from 'react-router-dom';
import InputText from '../../../components/input_text/InputText';
import Button from '../../../components/button/Button';
import TextButton from '../../../components/button/TextButton';
import styles from './authView.module.css';

const AuthView = ({ onLogin, onChange, formData, errors, mode = 'login' }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h2 className="text-3xl font-bold mb-4">Chào mừng bạn đến với hệ thống</h2>
                <p className="text-lg mb-6">Quản lý chiến dịch quảng cáo Facebook hiệu quả, tập trung và dễ sử dụng.</p>
                <img
                    src="https://source.unsplash.com/500x300/?digital,marketing"
                    alt="Banner"
                    className="rounded shadow"
                />
            </div>

            <div className={styles.rightSide}>
                <form onSubmit={onLogin} className="space-y-4">
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        {mode === 'register' ? 'Sign Up' : 'Sign In'}
                    </h2>
                    <InputText
                        name="username"
                        label="Email or phone number"
                        value={formData.username}
                        onChange={onChange}
                        placeholder="Input username"
                        error={errors.username}
                    />
                    <InputText
                        name="password"
                        type="password"
                        label="Password"
                        value={formData.password}
                        onChange={onChange}
                        placeholder="Input password"
                        error={errors.password}
                    />
                    {mode === 'register' && (
                        <div className={styles.formGroup}>
                            <InputText
                                className={styles.inputUsername}
                                name="confirmPassword"
                                type="password"
                                label="Re-enter password"
                                value={formData.confirmPassword}
                                onChange={onChange}
                                placeholder="Re-enter password"
                                error={errors.confirmPassword}
                            />
                        </div>
                    )}
                    <div className={styles.formGroup}>
                        <Button
                            type="submit"
                            className={mode === 'register' ? styles.buttonRegister : styles.buttonLogin}
                            onClick={() => {
                                console.log(`Click login with ${formData}`)
                            }}
                            children={mode === 'register' ? 'Register' : 'Login'}
                        />
                        {mode === 'login' && (
                            <TextButton onClick={() => navigate('/register')} className={styles.textButton}>
                                Create an account!
                            </TextButton>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AuthView;