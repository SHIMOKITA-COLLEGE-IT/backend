import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserSkillAcquisitionUncheckedCreateNestedManyWithoutUserRootsTracingInput } from '../user-skill-acquisition/user-skill-acquisition-unchecked-create-nested-many-without-user-roots-tracing.input';

@InputType()
export class UserRootsTracingUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    rootsId!: number;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;

    @Field(() => UserSkillAcquisitionUncheckedCreateNestedManyWithoutUserRootsTracingInput, {nullable:true})
    userSkillAcquisitions?: UserSkillAcquisitionUncheckedCreateNestedManyWithoutUserRootsTracingInput;
}
