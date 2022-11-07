import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsCreateInput } from './my-skills-create.input';
import { MySkillsUpdateInput } from './my-skills-update.input';

@ArgsType()
export class UpsertOneMySkillsArgs {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsCreateInput, {nullable:false})
    @Type(() => MySkillsCreateInput)
    create!: MySkillsCreateInput;

    @Field(() => MySkillsUpdateInput, {nullable:false})
    @Type(() => MySkillsUpdateInput)
    update!: MySkillsUpdateInput;
}
