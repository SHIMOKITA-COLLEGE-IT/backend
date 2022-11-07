import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsCreateWithoutMyRootsInput } from './my-skills-create-without-my-roots.input';

@InputType()
export class MySkillsCreateOrConnectWithoutMyRootsInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsCreateWithoutMyRootsInput, {nullable:false})
    @Type(() => MySkillsCreateWithoutMyRootsInput)
    create!: MySkillsCreateWithoutMyRootsInput;
}
