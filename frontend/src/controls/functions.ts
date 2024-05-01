export function requestsError(error: any) {
    const listErrors = ['detail', 'non_field_errors', 'username', 'password', 'foto', 'email', 'first_name', 'last_name', 'title', 'description', 'bedrooms', 'bathrooms', 'parking', 'area', 'photos', 'price'];

    for (let i = 0; i < listErrors.length; i++) {
        if (error[listErrors[i]]) {
            return error[listErrors[i]];
        } else {
            return 'Erro desconhecido';
        }
    }
}