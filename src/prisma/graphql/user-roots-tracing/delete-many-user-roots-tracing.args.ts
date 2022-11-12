import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRootsTracingWhereInput } from './user-roots-tracing-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserRootsTracingArgs {

    @Field(() => UserRootsTracingWhereInput, {nullable:true})
    @Type(() => UserRootsTracingWhereInput)
    where?: UserRootsTracingWhereInput;
}
