'use client'
import Modal from "@/app/components/modals/Modal";
import CustomButton from "@/app/components/forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";
const SignupModal = () => {
    const SignupModal = useSignupModal();
    const content = (
        <>
            <form className="space-y-2">
                <input
                    type="email"
                    placeholder="You e-mail address"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                <input
                    type="password"
                    placeholder="You password"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                <input
                    type="password"
                    placeholder="Repeat your password"
                    className="w-full h-[54px] border border-gray-300 rounded-xl"
                />
                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Error message
                </div>
                <CustomButton
                    label="Submit"
                    onClick={() => console.log('Clicked')}
                />
            </form>
        </>
    )
    return (
        <Modal
            label="Sign up"
            content={content}
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
        />
    )
}
export default SignupModal