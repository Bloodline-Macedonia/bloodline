export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'name', title: 'Full Name', type: 'string'
        },
        {
            name: 'birthDate', title: 'Birthdate', type: 'date'
        },
        {
            name: 'bloodType', title: 'Blood Type', type: 'string'
        },
        {
            name: 'phone', title: 'Phone Number', type: 'string'
        },
        {
            name: 'email', title: 'Email', type: 'string'
        }
    ]
}