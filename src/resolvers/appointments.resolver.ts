import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { CreateAppointmentInput } from '../dtos/input/create-appointment.input';
import { Appointment } from '../dtos/models/Appointment';

@Resolver()
export class AppointmentsResolver {
    @Query(() => [Appointment])
    async appoitments() {
        return [];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {
        const appointment: Appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        };

        return appointment;
   }
}