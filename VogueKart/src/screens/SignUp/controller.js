export const validatePhone = phone => {
    return !/[a-zA-z]/.test(phone) && !/^[\d\-\+]+$/.test(phone);
};

export const validateEmail = email => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
};
