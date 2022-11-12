import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-update-without-user-skill-acquisitions.input';
import { Type } from 'class-transformer';
import { UserRootsTracingCreateWithoutUserSkillAcquisitionsInput } from './user-roots-tracing-create-without-user-skill-acquisitions.input';

@InputType()
export class UserRootsTracingUpsertWithoutUserSkillAcquisitionsInput {

    @Field(() => UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput, {nullable:false})
    @Type(() => UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput)
    update!: UserRootsTracingUpdateWithoutUserSkillAcquisitionsInput;

    @Field(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput, {nullable:false})
    @Type(() => UserRootsTracingCreateWithoutUserSkillAcquisitionsInput)
    create!: UserRootsTracingCreateWithoutUserSkillAcquisitionsInput;
}
