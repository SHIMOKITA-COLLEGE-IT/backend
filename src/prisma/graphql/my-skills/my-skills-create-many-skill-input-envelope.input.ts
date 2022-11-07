import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateManySkillInput } from './my-skills-create-many-skill.input';
import { Type } from 'class-transformer';

@InputType()
export class MySkillsCreateManySkillInputEnvelope {

    @Field(() => [MySkillsCreateManySkillInput], {nullable:false})
    @Type(() => MySkillsCreateManySkillInput)
    data!: Array<MySkillsCreateManySkillInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
