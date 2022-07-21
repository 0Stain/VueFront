import BookingsList from '../components/BookingsList';
import AddBooking from '../components/AddBooking';
import UsersList from '../components/UsersList';
import { createRouter, createWebHistory } from 'vue-router';



const routes = [
    {
        name: 'BookingsList',
        path: '/',
        component: BookingsList
    },
    {
        name: 'AddBooking',
        path: '/add_booking',
        component: AddBooking
    },
    {
        name: 'UsersList',
        path: '/users_list',
        component: UsersList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;