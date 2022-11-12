import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsCreateNestedOneWithoutUsersInput } from '../roots/roots-create-nested-one-without-users.input';
import { UserSkillAcquisitionCreateNestedManyWithoutUserRootsTracingInput } from '../user-skill-acquisition/user-skill-acquisition-create-nested-many-without-user-roots-tracing.input';

@InputType()
export class UserRootsTracingCreateWithoutUserInput {

    @Field(() => RootsCreateNestedOneWithoutUsersInput, {nullable:false})
    roots!: RootsCreateNestedOneWithoutUsersInput;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => UserSkillAcquisitionCreateNestedManyWithoutUserRootsTracingInput, {nullable:true})
    userSkillAcquisitions?: UserSkillAcquisitionCreateNestedManyWithoutUserRootsTracingInput;
}
