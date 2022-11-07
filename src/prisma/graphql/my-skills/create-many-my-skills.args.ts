import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MySkillsCreateManyInput } from './my-skills-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMySkillsArgs {

    @Field(() => [MySkillsCreateManyInput], {nullable:false})
    @Type(() => MySkillsCreateManyInput)
    data!: Array<MySkillsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
