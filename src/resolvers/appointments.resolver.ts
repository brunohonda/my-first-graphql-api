import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { CreateAppointmentInput } from '../dtos/input/create-appointment.input';
import { Appointment } from '../dtos/models/Appointment';
import { Customer } from '../dtos/models/Customer';

@Resolver(() => Appointment)
export class AppointmentsResolver {
    @Query(() => [Appointment])
    async appoitments() {
        return [{
            startsAt: new Date(),
            endsAt: new Date(),
        }];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {
        const appointment: Appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        };

        return appointment;
   }

   @FieldResolver(() => Customer)
   async customer(@Root() appoitment: Appointment) {
        return {
            name: 'John From'
        }
   }
}