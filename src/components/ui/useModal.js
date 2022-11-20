import { useState } from 'react';

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);

	function toggle() {
		setIsShowing(!isShowing);

        if(!isShowing){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
	}

	return [
		isShowing,
		toggle
	];
}

export default useModal;