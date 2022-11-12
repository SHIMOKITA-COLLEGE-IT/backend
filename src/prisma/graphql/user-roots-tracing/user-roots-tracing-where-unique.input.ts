import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingUserIdRootsIdCompoundUniqueInput } from './user-roots-tracing-user-id-roots-id-compound-unique.input';

@InputType()
export class UserRootsTracingWhereUniqueInput {

    @Field(() => UserRootsTracingUserIdRootsIdCompoundUniqueInput, {nullable:true})
    userId_rootsId?: UserRootsTracingUserIdRootsIdCompoundUniqueInput;
}
