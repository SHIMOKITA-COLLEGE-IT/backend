import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsCreateManyMyRootsInput } from './my-skills-create-many-my-roots.input';
import { Type } from 'class-transformer';

@InputType()
export class MySkillsCreateManyMyRootsInputEnvelope {

    @Field(() => [MySkillsCreateManyMyRootsInput], {nullable:false})
    @Type(() => MySkillsCreateManyMyRootsInput)
    data!: Array<MySkillsCreateManyMyRootsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
