import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionCreateWithoutUserRootsTracingInput } from './user-skill-acquisition-create-without-user-roots-tracing.input';

@InputType()
export class UserSkillAcquisitionCreateOrConnectWithoutUserRootsTracingInput {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionCreateWithoutUserRootsTracingInput, {nullable:false})
    @Type(() => UserSkillAcquisitionCreateWithoutUserRootsTracingInput)
    create!: UserSkillAcquisitionCreateWithoutUserRootsTracingInput;
}
