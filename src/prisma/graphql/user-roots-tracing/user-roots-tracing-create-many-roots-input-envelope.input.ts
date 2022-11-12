import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingCreateManyRootsInput } from './user-roots-tracing-create-many-roots.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRootsTracingCreateManyRootsInputEnvelope {

    @Field(() => [UserRootsTracingCreateManyRootsInput], {nullable:false})
    @Type(() => UserRootsTracingCreateManyRootsInput)
    data!: Array<UserRootsTracingCreateManyRootsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
