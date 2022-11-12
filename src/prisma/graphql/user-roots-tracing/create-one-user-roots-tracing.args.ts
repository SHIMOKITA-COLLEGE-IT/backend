import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingCreateInput } from './user-roots-tracing-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserRootsTracingArgs {

    @Field(() => UserRootsTracingCreateInput, {nullable:false})
    @Type(() => UserRootsTracingCreateInput)
    data!: UserRootsTracingCreateInput;
}
