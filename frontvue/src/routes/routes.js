import BookingsList from '../components/BookingsList';
import AddBooking from '../components/AddBooking';
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;