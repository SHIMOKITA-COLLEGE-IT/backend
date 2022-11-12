import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionUpdateWithoutUserRootsTracingInput } from './user-skill-acquisition-update-without-user-roots-tracing.input';
import { UserSkillAcquisitionCreateWithoutUserRootsTracingInput } from './user-skill-acquisition-create-without-user-roots-tracing.input';

@InputType()
export class UserSkillAcquisitionUpsertWithWhereUniqueWithoutUserRootsTracingInput {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => UserSkillAcquisitionUpdateWithoutUserRootsTracingInput, {nullable:false})
    @Type(() => UserSkillAcquisitionUpdateWithoutUserRootsTracingInput)
    update!: UserSkillAcquisitionUpdateWithoutUserRootsTracingInput;

    @Field(() => UserSkillAcquisitionCreateWithoutUserRootsTracingInput, {nullable:false})
    @Type(() => UserSkillAcquisitionCreateWithoutUserRootsTracingInput)
    create!: UserSkillAcquisitionCreateWithoutUserRootsTracingInput;
}
