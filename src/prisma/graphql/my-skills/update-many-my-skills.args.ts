import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsUncheckedUpdateManyInput } from './my-skills-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { MySkillsWhereInput } from './my-skills-where.input';

@ArgsType()
export class UpdateManyMySkillsArgs {

    @Field(() => MySkillsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => MySkillsUncheckedUpdateManyInput)
    data!: MySkillsUncheckedUpdateManyInput;

    @Field(() => MySkillsWhereInput, {nullable:true})
    @Type(() => MySkillsWhereInput)
    where?: MySkillsWhereInput;
}
