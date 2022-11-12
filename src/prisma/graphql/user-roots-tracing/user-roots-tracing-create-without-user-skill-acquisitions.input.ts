import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRootsInput } from '../user/user-create-nested-one-without-roots.input';
import { RootsCreateNestedOneWithoutUsersInput } from '../roots/roots-create-nested-one-without-users.input';

@InputType()
export class UserRootsTracingCreateWithoutUserSkillAcquisitionsInput {

    @Field(() => UserCreateNestedOneWithoutRootsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRootsInput;

    @Field(() => RootsCreateNestedOneWithoutUsersInput, {nullable:false})
    roots!: RootsCreateNestedOneWithoutUsersInput;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;
}
