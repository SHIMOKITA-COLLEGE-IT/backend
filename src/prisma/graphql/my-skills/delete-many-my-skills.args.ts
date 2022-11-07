import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsWhereInput } from './my-skills-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMySkillsArgs {

    @Field(() => MySkillsWhereInput, {nullable:true})
    @Type(() => MySkillsWhereInput)
    where?: MySkillsWhereInput;
}
