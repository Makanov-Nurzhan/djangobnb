'use client'
import Modal from "@/app/components/modals/Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "@/app/components/forms/CustomButton";
const LoginModal = () => {
    const loginModal = useLoginModal()
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
            label="Log in"
            content={content}
            isOpen={loginModal.isOpen}
            close={loginModal.close}
        />
    )
}
export default LoginModal