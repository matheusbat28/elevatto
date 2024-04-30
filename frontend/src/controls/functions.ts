export function requestsError(error: any) {
    const listErrors = ['detail', 'non_field_errors', 'username', 'password'];

    for (let i = 0; i < listErrors.length; i++) {
        if (error[listErrors[i]]) {
            return error[listErrors[i]];
        } else {
            return 'Erro desconhecido';
        }
    }
}