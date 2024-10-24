'use client'


import Modal from "@/app/components/modals/Modal";
import CustomButton from "@/app/components/forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";
import {useState} from "react";
import {useRouter} from "next/navigation";
import apiService from "@/app/services/apiService";
import {handlerLogin} from "@/app/lib/actions";

const SignupModal = () => {
    const router = useRouter();
    const signupModal = useSignupModal();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);


    //Submit functionality
    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2,
        }
        const response = await apiService.postWithoutToken('/api/auth/register/', JSON.stringify(formData))

        if (response.access) {

            handlerLogin(response.user.pk, response.access, response.refresh)

            signupModal.close()

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error
            })
            setErrors(tmpErrors)
        }
    }

    const content = (
        <>
            <form
                action={submitSignup}
                className="space-y-2"
            >
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="You e-mail address"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                <input
                    onChange={(e) => setPassword1(e.target.value)}
                    type="password"
                    placeholder="You password"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                <input
                    onChange={(e) => setPassword2(e.target.value)}
                    type="password"
                    placeholder="Repeat your password"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                {
                    errors.map((error, index) => {
                        return (
                            <div
                                key={`error_${index}`}
                                className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                            >
                                {error}
                            </div>
                        )
                    })
                }

                <CustomButton
                    label="Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
    )
    return (
        <Modal
            label="Sign up"
            content={content}
            isOpen={signupModal.isOpen}
            close={signupModal.close}
        />
    )
}
export default SignupModal