import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsUpdateInput } from './my-skills-update.input';
import { Type } from 'class-transformer';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';

@ArgsType()
export class UpdateOneMySkillsArgs {

    @Field(() => MySkillsUpdateInput, {nullable:false})
    @Type(() => MySkillsUpdateInput)
    data!: MySkillsUpdateInput;

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;
}
