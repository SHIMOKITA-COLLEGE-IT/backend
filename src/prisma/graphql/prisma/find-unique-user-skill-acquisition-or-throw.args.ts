import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereUniqueInput } from '../user-skill-acquisition/user-skill-acquisition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserSkillAcquisitionOrThrowArgs {

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:false})
    @Type(() => UserSkillAcquisitionWhereUniqueInput)
    where!: UserSkillAcquisitionWhereUniqueInput;
}
