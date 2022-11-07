import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsCreateInput } from './my-skills-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMySkillsArgs {

    @Field(() => MySkillsCreateInput, {nullable:false})
    @Type(() => MySkillsCreateInput)
    data!: MySkillsCreateInput;
}
