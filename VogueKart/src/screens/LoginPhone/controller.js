export const validatePhone = phone => {
    return !/[a-zA-z]/.test(phone) && !/^[\d\-\+]+$/.test(phone);
};

export const validateOtp = otp => {
    return !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(otp);
};