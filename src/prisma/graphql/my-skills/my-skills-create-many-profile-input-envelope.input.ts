import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateManyProfileInput } from './my-skills-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class MySkillsCreateManyProfileInputEnvelope {

    @Field(() => [MySkillsCreateManyProfileInput], {nullable:false})
    @Type(() => MySkillsCreateManyProfileInput)
    data!: Array<MySkillsCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
