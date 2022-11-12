import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSkillAcquisitionCreateManyUserRootsTracingInput } from './user-skill-acquisition-create-many-user-roots-tracing.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSkillAcquisitionCreateManyUserRootsTracingInputEnvelope {

    @Field(() => [UserSkillAcquisitionCreateManyUserRootsTracingInput], {nullable:false})
    @Type(() => UserSkillAcquisitionCreateManyUserRootsTracingInput)
    data!: Array<UserSkillAcquisitionCreateManyUserRootsTracingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
